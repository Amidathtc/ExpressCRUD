let item = [
    {id: 1, name: 'Hey'},
    {id: 2, name: 'Hud'},
    {id: 3, name: 'Him'},
    {id: 4, name: 'Hat'},
]

item = item.filter((el: any)=>{
    return el.id != 3
})


console.log(item)