import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { ITemplateProps } from "../interfaces";
import Utterances from "../components/Utterances";

type IPostTemplateProps = ITemplateProps<{
	html: string;
	title: string;
	date: string;
}>;

const PostTemplate: React.FC<IPostTemplateProps> = React.memo(props => {
	const { title, date, html } = props.pageContext;
	return (
		<Layout>
			<SEO title={title} lang="" />
			<h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
			<h4 className="text-sm mb-2 royal-400">{date}</h4>
			<hr />
			<div
				className="pb-20 markdown-body"
				dangerouslySetInnerHTML={{ __html: html }}
			/>
			<Utterances repo="clemado1/blog" />
		</Layout>
	);
});

PostTemplate.displayName = "PostTemplate";

export default PostTemplate;
