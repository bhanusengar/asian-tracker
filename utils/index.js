import { serialize } from 'next-mdx-remote/serialize';

export const serializeMarkdown = async (item) => {
  const body = await serialize(item.attributes.body);
  return {
      ...item,
      attributes: {
          ...item.attributes,
          body,
      },
  };
};


