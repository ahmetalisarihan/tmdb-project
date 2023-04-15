import React, { useEffect, useState } from "react";
import { Container } from "../components/container";
import { Link, useLocation } from "react-router-dom";
import { mergeClassName } from "../utils";

const MENU_CLASS = `
p-1.5
hover:bg-primary
rounded-md
`

const MENU_CLASS_ACTIVE = `bg-primary`

export const Header = () => {
    const location = useLocation()
    const [pathname, setPathname] = useState('')
    const getMenuClass = (path: string)=>{
        if(path === pathname){
            return mergeClassName(MENU_CLASS, MENU_CLASS_ACTIVE)
        }
        return mergeClassName(MENU_CLASS, '')
    }

    useEffect(()=> {
        setPathname(location.pathname)
    }, [location.pathname])

  return (
    <div className="bg-header ">
      <Container clasName="flex item-center justify-between">
        <div className="flex items-center gap-6">
            <h1 className="text-2xl font-semibold">
                <Link to={'./'}>TMDB</Link>
            </h1>
            <div className="
            pt-1.5
            flex 
            items-center 
            gap-1.5">
                <Link className={getMenuClass('./movies')} to={'./movies'}>Movies</Link>
                <Link className={getMenuClass('./tv')} to={'./tv'}>TV</Link>
            </div>
        </div>
      </Container>
    </div>
  );
};
