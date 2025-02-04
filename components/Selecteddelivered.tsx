import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


export default function Selecteddelivered() {
    const names = [
        { title: "Daniel Hall", value: "daniel" },
        { title: "Joseph Hall", value: "joseph" },
        { title: "Deborah Hall", value: "deborah" },
        { title: "Esther Hall", value: "esther" },
        { title: "Peter Hall", value: "peter" },
        { title: "Paul Hall", value: "paul" },
        { title: "John Hall", value: "john" },
        { title: "Lydia Hall", value: "lydia" },
        { title: "Mary Hall", value: "mary" },
        { title: "Chapel", value: "chapel" }
    ];
    return (
        <Select >
            <SelectTrigger placeholder="Delivery Location" className="">
                <SelectValue className="text-neutral-300 data-[placeholder]:text-neutral-700 data-[placeholder]:opacity-100" />
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