const express=require('express');
const router= express.Router()


const controllerUsers=require('../controll/peopleController')
const controllerPets=require('../controll/petsController')

                    //Somente Rotas de Users
router.get("/auth/login", controllerUsers.callPeople)
router.post("/doguinho-ong", controllerUsers.cadastroUser)

//********************************************************************************************************************************/
                    //Somente Rotas de Pets
router.get("/auth/pets", controllerPets.allPets)
router.post("/doguinho-ong/pets/filtrarpet", controllerPets.findPet)
router.post("/doguinho-ong/pets", controllerPets.adicionarPet)
router.put("/doguinho-ong/pets/updateall/:id", controllerPets.updtateAllcaracter)
router.patch("/doguinho-ong/pets/updatesome/:id", controllerPets.updateSomeCaracter)
router.delete("/doguinho-ong/pets/deletepet/:id", controllerPets.deletarPet)



// router.post("/the-simpsons/personagens", controller.cadastrarPersonagem)
// router.patch("/the-simpsons/personagens/:id", controller.atualizarPersonagem)
// router.delete("/the-simpsons/personagens/:id", controller.deletarPersonagem)
module.exports=router