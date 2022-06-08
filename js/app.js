const select = document.getElementById("region");
const departement = document.getElementById("departement");

const region = {
    
    auvergne_rhone_alpes:["Ain","Allier","Ardèche","Cantal","Drôme","Isère","Loire","Hte_Loire",],
    occitanie:["Ariège","Gard","Tarn","Lozère","Aveyron"],

}

for (const regions in region) {
    const option = document.createElement("option");
    option.textContent = regions;
    select.appendChild(option);
}

select.addEventListener("click", ()=>{
    switch(select.value){
        case "none": departement.innerHTML = ""
        break;
        case "auvergne_rhone_alpes":
            departement.innerHTML = ""
            for(let i = 0; i < region.auvergne_rhone_alpes.length; i++){
                const option = document.createElement("option");
                option.textContent = region.auvergne_rhone_alpes[i]
                departement.appendChild(option)
            }
        break;
        case "occitanie":
            departement.innerHTML = ""
            for(let i = 0; i < region.occitanie.length; i++){
                const option = document.createElement("option");
                option.textContent = region.occitanie[i]
                departement.appendChild(option)
            }
        break;
    }
})




