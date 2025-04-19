'use client';

import React from 'react';

import { XIcon } from 'lucide-react';
import Link from 'next/link';

const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector(
      'search-form'
    ) as HTMLFormElement | null;

    if (form) {
      form.reset();
    }
  };

  return (
    <button type="reset" onClick={reset}>
      <Link href="/" className="search-btn text-white">
        <XIcon className="size-5" />
      </Link>
    </button>
  );
};

export default SearchFormReset;
