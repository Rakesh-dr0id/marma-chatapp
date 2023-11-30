import { Dropdown } from 'flowbite-react';

function Component() {
  return (
    <Dropdown label="Dropdown button" dismissOnClick={false}>
      <Dropdown.Item>Create Group</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  );
}

export default Component;
