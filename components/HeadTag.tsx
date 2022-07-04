/** @jsx h */
/** @jsxFrag Fragment */
import { Head } from "https://deno.land/x/fresh@1.0.0/runtime.ts";
import { h } from "preact";

interface HeadTagProps {
  title?: string;
  description?: string;
}

export const HeadTag = ({ 
  title = 'Brandon Capecci Portfolio',
  description = 'Brandon Capecci Portfolio',
}: HeadTagProps) => { 
    return (
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="styles.css" />
      </Head>
    );
};
