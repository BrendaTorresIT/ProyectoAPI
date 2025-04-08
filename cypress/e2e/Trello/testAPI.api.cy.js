describe('API Tests', () =>{ 
    let cardID;


        
    const listA = '66946941c3f520cfc3c0747c'; 
    const key = '8debb4f15c5425eb56779ba7be2e67ef'; 
    const token = 'ATTA4fbd5476ee500f59c17e42cf03e1a74228448fc95210fe5db94d12e2eb06149a8390DF71';
    const card1 = '6699af0450296d86c5582c15';
    const card2 = '6699af09412e9f6ac5ec8a32'; 
    const card4 = '67f32edbd69188eea49850b6';
    const card3 = '67e374046f3c878317e23d28'

    
    
        it('TC1: REQUEST de Método GET a la API de TRELLO para OBTENER CARD1', () => {
            
            cy.api({
                method: 'GET',
                url: 'https://api.trello.com/1/cards/' + card1, 
                qs: {
                    
                    key: key,
                    token: token,
                },
            }).then(response => {
                expect(response).to.be.an('object');
                expect(response.status).to.eql(200);
                
            });
        });
    
    

            it('TC2: REQUEST de Método GET a la API de TRELLO para OBTENER CARD2', () => {
                
                cy.request({
                    method: 'GET',
                    url: 'https://api.trello.com/1/cards/' + card2, 
                    qs: {
                        
                        key: key,
                        token: token,
                    },
                }).then(response => {
                    expect(response).to.be.an('object');
                    expect(response.status).to.eql(200);
                    
                });
            });
            it('TC3: REQUEST de Método POST a la API de TRELLO para CREAR UNA SEGUNDA CARD', () => {
                cy.request({
                    method: 'POST',
                    url: 'https://api.trello.com/1/cards',
                    qs: {
                        
                        key: key,
                        token: token,
                        idList: listA,
                        name: 'Nueva tarjeta : Metodo POST ✅', 
                    },
                }).then(response => {
                    expect(response).to.be.an('object');
                    expect(response.status).to.eql(200);
                    expect(response.body.name).to.eql('Nueva tarjeta : Metodo POST ✅');
                    cardID = response.body.id;
                });
            
            });
            it('TC4: REQUEST de Método POST a la API de TRELLO para CREAR UNA TERCERA CARD', () => {
                cy.request({
                    method: 'POST',
                    url: 'https://api.trello.com/1/cards',
                    qs: {
                        
                        key: key,
                        token: token,
                        idList: listA,
                        name: 'Validaciones Exitosas : Metodo GET ✅' 
                    },
                }).then(response => {
                    expect(response).to.be.an('object');
                    expect(response.status).to.eql(200);
                    expect(response.body.name).to.eql('Validaciones Exitosas : Metodo GET ✅');
                    cardID = response.body.id;
                });
            });

            it('TC5: REQUEST de Método PUT a la API de TRELLO para EDITAR CARD1', () => {
                
                cy.request({
                    method: 'PUT',
                    url: 'https://api.trello.com/1/cards/' + card4, 
                    qs: {
                        key: key,
                        token: token,
                        name:  'Tarjeta Editada: Metodo PUT ✅', 
                        desc: 'Esto es una descripción para editar la Card previamente creada', 
                    },
                    body: {
                        cover: {
                            color: 'yellow',
                            brightness: 'dark',
                            size: 'full',
                        },
                    },
                }).then(
                    (
                        { body } 
                    ) => {
                        expect(body).to.be.an('object');
                        expect(body.id).to.eql(card4);
                        expect(body.name).to.eql('Tarjeta Editada: Metodo PUT ✅');
                        expect(body.desc).to.include('Esto es una descripción');
                        expect(body.cover).to.be.an('object').and.to.include({ color: 'green' }); 
                    }
                );
            });
            it('TC6: REQUEST de Método DELETE a la API de TRELLO para ELIMINAR CARD2', () => {
                
                cy.request({
                    method: 'DELETE',
                    url: 'https://api.trello.com/1/cards/' + card3, 
                    qs: {
                        key: key,
                        token: token,
                    },
                }).then(response => {
                    expect(response.body.limits).to.be.empty;
                    expect(response.status).to.eql(200);
                });
    
        });




        });
        