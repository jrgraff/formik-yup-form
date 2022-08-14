import { Menu } from "@headlessui/react";

type Option = {
  id: string;
  description: string;
};

type CustomDropdownProps = {
  buttonName: string;
  options: Option[];
};

export function CustomDropdown({ buttonName, options }: CustomDropdownProps) {
  return (
    <Menu>
      <Menu.Button>{buttonName}</Menu.Button>
      <Menu.Items>
        <Menu.Item>
          {options &&
            options.map((option) => (
              <a className={"bg-blue-500"} href="/account-settings">
                {option.description}
              </a>
            ))}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
