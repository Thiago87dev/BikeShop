"use client";
import Select from "react-select";
import { countries } from "@/data/countries";
import { useState } from "react";

const countryOptions = countries.map((country) => ({
  value: country,
  label: country,
}));

const CountrySelect = () => {
  const [selectedCountry, setSelectedCountry] = useState(countryOptions[186] || 0);

  const handleChange = (option: { value: string; label: string } | null) => {
    if (option) {
      setSelectedCountry(option);
    }
  };
  return (
    <div>
      <Select
        value={selectedCountry}
        options={countryOptions}
        onChange={handleChange}
        isSearchable
        styles={{
            control:(base) =>({
                ...base,
                padding:"4px"
            })
        }}
      />
    </div>
  );
};

export default CountrySelect;
