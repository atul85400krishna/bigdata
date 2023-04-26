import styles from "./Navbar.module.css";
// import Dark from "./Dark";
// import { ThemeContext } from '../context/theme';
import React, { useState } from 'react'
// import {BsFillSunFill,BsMoonFill} from "react-icons/bs"
// import "./App.css"
// import React from 'react'
import {BsFillSunFill,BsMoonFill} from "react-icons/bs"
import { ThemeContext } from '../context/theme';
import style from "../styles/navbar.module.css"



import {
  Box,
  MenuItem,
  MenuList,
  MenuButton,
  Menu,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const [ dark, setdark] = useState(false);
  const [{ themename, toggeltheme }] = React.useContext(ThemeContext);


  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            {/* logo */}
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK8AAAAmCAYAAACyLctlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI1N0EzODZFNzU4QTExRUFBMENBRjU5NzQzNzgzQkI5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI1N0EzODZGNzU4QTExRUFBMENBRjU5NzQzNzgzQkI5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjU3QTM4NkM3NThBMTFFQUEwQ0FGNTk3NDM3ODNCQjkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjU3QTM4NkQ3NThBMTFFQUEwQ0FGNTk3NDM3ODNCQjkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz42mV5qAAAGnUlEQVR42uxcX2gc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"
              alt=""
            />
          </Text>

          <Flex display={{ base: "none", md: "flex"}} ml={10}>
            <Menu>
              {/* <Hamburger /> */}

              <MenuButton
                style={{ backgroundColor: "transparent" }}
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                Home
              </MenuButton>
              <MenuList>
                <MenuItem>Home one</MenuItem>
                <MenuItem>Home two</MenuItem>
                <MenuItem>Home three</MenuItem>
                <MenuItem> Home four</MenuItem>
                <MenuItem>Home five</MenuItem>
              </MenuList>
            </Menu>
            {/* <DesktopNav /> */}

            <Menu>
              <MenuButton
                style={{ backgroundColor: "transparent" }}
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                Services
              </MenuButton>
              <MenuList>
                <MenuItem>Services</MenuItem>
                <MenuItem>Services Details</MenuItem>
                {/* <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem> */}
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                style={{ backgroundColor: "transparent" }}
                as={Button}
              >
                About Us
              </MenuButton>
              <MenuList>
                {/* <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem> */}
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                style={{ backgroundColor: "transparent" }}
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                Projects
              </MenuButton>
              <MenuList>
                <MenuItem>Projects</MenuItem>
                <MenuItem>Project Details</MenuItem>
                {/* <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem> */}
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton
                style={{ backgroundColor: "transparent" }}
                className={styles.btn_nav}
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                Blog
              </MenuButton>
              <MenuList>
                <MenuItem>Blog</MenuItem>
                <MenuItem>Blog Details</MenuItem>
                {/* <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem> */}
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton
                style={{ backgroundColor: "transparent" }}
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                Shop
              </MenuButton>
              <MenuList>
                <MenuItem>Single Product</MenuItem>
                <MenuItem>Cart</MenuItem>
                <MenuItem>Checkout</MenuItem>
                <MenuItem>Login</MenuItem>
                <MenuItem>Contact Us</MenuItem>
                <MenuItem>FQA</MenuItem>
                <MenuItem>404 Error</MenuItem>
              </MenuList>
            </Menu>

            {/* <div className='btna'>
            <button onClick={toggeltheme} >
            {themename === "dark" ? <BsFillSunFill /> : <BsMoonFill /> }
            </button>
         </div> */}
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            href={"#"}
          ></Button>
          {/* <Dark /> */}
          <div className={style.btna}>
            <button onClick={toggeltheme} >
            {themename === "dark" ? <BsFillSunFill /> : <BsMoonFill /> }
            </button>
         </div>
          <Button
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            borderRadius={25}
            width={200}
            color={"white"}
            bg={"blue.400"}
            href={"#"}
            _hover={{
              bg: "black.300",
            }}
          >
            contant us
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Inspiration",
    children: [
      {
        label: "Explore Design Work",
        subLabel: "Trending Design to inspire you",
        href: "#",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
    ],
  },
  {
    label: "Find Work",
    children: [
      {
        label: "Job Board",
        subLabel: "Find your dream design job",
        href: "#",
      },
      {
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
        href: "#",
      },
    ],
  },
  {
    label: "Learn Design",
    href: "#",
  },
  {
    label: "Hire Designers",
    href: "#",
  },
];
