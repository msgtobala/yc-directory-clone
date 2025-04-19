import React from 'react';

import Form from 'next/form';
import { Search } from 'lucide-react';
import SearchFormReset from '@/components/SearchFormReset';

const SearchForm = (props: { query?: string }) => {
  const { query } = props;

  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        type="text"
        defaultValue={query}
        className="search-input"
        placeholder="Search Startups"
      />
      <div className="flex gap-2">
        {query && <SearchFormReset />}
        <button type="submit" className="search-btn text-white">
          <Search className="size-5" />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
