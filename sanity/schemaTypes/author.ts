import { defineField, defineType } from 'sanity';
import { UserIcon } from '@sanity/icons';

export const author = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'id',
      type: 'string',
    }),
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'username',
      type: 'string',
    }),
    defineField({
      name: 'email',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'url',
    }),
    defineField({
      name: 'bio',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
});

// AUTH_SECRET="ANQO9svTh9OUFoDEq/K5Plwqf8F8M8pGmwjaRQj6z4o="
// AUTH_GITHUB_ID="Ov23lilvS7PaRpF8CLMg"
// AUTH_GITHUB_SECRET="a3d2a9a6ead3aa200805992827e420d7942a1fa7"
// NEXT_PUBLIC_SANITY_PROJECT_ID="1o9g2szr"
// NEXT_PUBLIC_SANITY_DATASET="production"
