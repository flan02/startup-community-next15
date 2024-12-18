import Form from "next/form";
import SearchFormReset from "@/components/custom/SearchFormReset";
import { Search } from "lucide-react";

type SearchFormProps = {
  query?: string
}

const SearchForm = ({ query }: SearchFormProps) => {
  // query = 'Test'
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search Startups"
      />

      <div className="flex gap-2">
        {/* Custom client component will reset our form */}
        {
          query && <SearchFormReset />
        }
        <button type="submit" className="search-btn text-white">
          <Search className="size-5" />
        </button>
      </div>
    </Form>
  )
}

export default SearchForm