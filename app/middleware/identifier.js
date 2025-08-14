export const getLoginQuery = (identifier) => {
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier);
    const isMobile = /^[6-9]\d{9}$/.test(identifier);

    if (isEmail) return { email: identifier };
    if (isMobile) return { mob_no: identifier };
    if(!isEmail && !isMobile)
    throw new Error("Please enter a valid email or mobile number");
};

export const getAdminLoginQuery = (identifier) => {
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier);
    if (isEmail) return { email: identifier };
    throw new Error("Please enter a valid email");
};