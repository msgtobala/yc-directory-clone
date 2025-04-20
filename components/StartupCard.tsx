import React from 'react';

import { formatDate } from '@/lib/utils';
import { EyeIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { Author, Startup } from '@/sanity/types';

export type StartupCardType = Omit<Startup, 'author'> & { author?: Author };

const StartupCard = (props: { post: StartupCardType }) => {
  const { post } = props;
  const {
    _createdAt,
    _id,
    views,
    title,
    description,
    image,
    category,
    author,
  } = post;

  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary">
            <span className="text-16-medium">{views}</span>
          </EyeIcon>
        </div>
      </div>
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link
            href={`/user/${post.author?._id}`}
            className="text-16-medium line-clamp-1"
          >
            {author?.name}
          </Link>
          <Link className="" href={`/startup/${_id}`}>
            <h3 className="line-clamp-1 text-26-semibold">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${post.author?._id}`}>
          <Image
            src="https://placehold.co/48x48"
            alt="Placeholder"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>
      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc">{description}</p>
        <img src={image} alt="Placeholder" className="startup-card_img" />
      </Link>
      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category?.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <Button className="startup-card_btn" asChild>
          <Link href={`/startup/${_id}`} className="text-16-medium">
            Details
          </Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;
