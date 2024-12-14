export function getFirstLetters(fullname){
    const [firstName, lastName] = fullname.split(" ");
    const avatarText = `${firstName.charAt(0)}${lastName ? lastName.charAt(0) : ""}`;
    return avatarText?.toUpperCase()
}

export function capitalizeString(str) {
    if (!str) return str; 
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
