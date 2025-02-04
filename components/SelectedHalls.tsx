import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function SelectedHalls() {
    const names = [
        { title: "Daniel Hall", value: "Daniel" },
        { title: "Joseph Hall", value: "Joseph" },
        { title: "Deborah Hall", value: "Deborah" },
        { title: "Esther Hall", value: "Esther" },
        { title: "Peter Hall", value: "Peter" },
        { title: "Paul Hall", value: "Paul" },
        { title: "John Hall", value: "John" },
        { title: "Lydia Hall", value: "Lydia" },
        { title: "Mary Hall", value: "mary" },
        { title: "Chapel", value: "chapel" }
    ];


    return (
        <Select >
            <SelectTrigger placeholder="Your  Hall Of Residence" className="">
                <SelectValue className="text-neutral-300 tracking-[1px] data-[placeholder]:text-neutral-700 data-[placeholder]:opacity-100" />
            </SelectTrigger>

            <SelectContent>
                <SelectGroup>
                    {/* <SelectLabel>North America</SelectLabel> */}
                    {names.map((name) => (
                        <SelectItem key={name.value} value={name.value.toLowerCase()} className="">
                            {name.title}
                        </SelectItem>
                    ))}
                </SelectGroup>

            </SelectContent>
        </Select>
    )
}