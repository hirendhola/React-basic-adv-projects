import { useState } from "react";

function DynamicMenu({ menuItems }) {
    const [menuExpanded, setMenuExpanded] = useState({});

    const handleToggleMenu = (id) => {
        setMenuExpanded({
            ...menuExpanded,
            [id]: !menuExpanded[id]
        });
        console.log(menuExpanded);
    };
    const printSubmenu = (item) => {

        if (item.submenu.length === 0) {
            return null;
        }

        return (
            <ul className="ml-5">
                {item.submenu.map((subitem) => (
                    <li key={subitem.id}>
                        <a href={subitem.url}>{subitem.label}</a>
                        {subitem.submenu.length > 0 && (
                            <span className="cursor-pointer ml-3 " onClick={() => handleToggleMenu(subitem.id)}>
                                {menuExpanded[subitem.id] ? '-' : '+'}
                            </span>
                        )}
                        {menuExpanded[subitem.id] && printSubmenu(subitem)}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <>
            <div className=" rekative w-screen min-h-screen">
                <h1 className="absolute text-slate-900  text-2xl font-bold m-3 left-[50%]">DynamicMenu</h1>
                <div
                    className="w-[1005] min-h-[100%]
                 bg-slate-200 flex items-start justify-start"
                >

                    <div
                        className="h-screen w-[17vw] bg-slate-800 flex flex-col 
                items-center py-28 px-10 text-slate-300 text-lg ">
                        <ul
                            className="flex flex-col  w-full"
                        >
                            {menuItems.map((item) => (
                                <li key={item.id} className="my-2">
                                    <a href={item.url}>{item.label}</a>
                                    {item.submenu.length > 0 && (
                                        <span className="cursor-pointer ml-3 text-lg" onClick={() => handleToggleMenu(item.id)}>
                                            {menuExpanded[item.id] ? '-' : '+'}
                                        </span>
                                    )}
                                    {menuExpanded[item.id] && printSubmenu(item)}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DynamicMenu;
