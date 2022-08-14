import { Switch } from "@headlessui/react"
import { useState } from "react"

type CustomToggleProps = {
    enabled: boolean;
    setEnabled: (e: boolean) => void;
}

export const CustomToggle = ({ enabled, setEnabled }: CustomToggleProps) => {

    return (
        <div className="flex items-center">
            <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${enabled ? 'bg-gray-800' : 'bg-gray-400'}
                relative inline-flex h-4 w-7 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                <span
                    aria-hidden="true"
                    className={`${enabled ? 'translate-x-3' : 'translate-x-0'}
                    pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                    />
            </Switch>
                    <p className="block text-grey-darker text-sm ml-1 mr-2">Required</p>
        </div>
    )
}