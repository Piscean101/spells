let RemoveCharm = (target,n=1) => {

    let [charms,count] = [target.hanging.charms,0];

    for(let i = charms.length-1 ; i >= 0 && count < n ; i--) {

        console.log(isIndestructible(charms[i]))

        if(!isIndestructible(charms[i])) {
            console.log(`Removed ${charms[i].name} { ${charms[i].type} ${charms[i].effect} } `)
            charms.splice(i,1);
        }

    }

    return charms;
}