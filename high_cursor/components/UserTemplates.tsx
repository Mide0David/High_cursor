import React from "react";
import { client } from "@/sanity/lib/client";
import { TEMPLATES_BY_AUTHOR_QUERY } from "@/sanity/lib/queries";
import TemplateCard, { TemplateTypeCard } from "@/components/TemplateCard";

const UserTemplates = async ({ id }: { id: string }) => {
  const templates = await client.fetch(TEMPLATES_BY_AUTHOR_QUERY, { id });

  return (
    <>
      {templates.length > 0 ? (
        templates.map((startup: TemplateTypeCard) => (
          <TemplateCard key={startup._id} post={startup} />
        ))
      ) : (
        <p className="no-result">No posts yet</p>
      )}
    </>
  );
};
export default UserTemplates;
