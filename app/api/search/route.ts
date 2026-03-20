import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const query = (searchParams.get("q") || "").trim();

    if (!query) {
      const { data, error } = await supabase
        .from("prompts")
        .select("*")
        .eq("is_published", true)
        .order("created_at", { ascending: false })
        .limit(20);

      if (error) {
        return NextResponse.json(
          { error: error.message },
          { status: 500 }
        );
      }

      return NextResponse.json({ results: data || [] });
    }

    const { data, error } = await supabase.rpc("search_prompts", {
      search_query: query,
    });

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ results: data || [] });
  } catch (error) {
    console.error("Search API error:", error);

    return NextResponse.json(
      { error: "Unexpected server error" },
      { status: 500 }
    );
  }
}