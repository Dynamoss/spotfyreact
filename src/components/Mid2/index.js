import React from 'react';

import './styles.css'



const Mid2 = () => <mid2> 



<h1>FAQ</h1>
    <section>
        <div class="container">            
            <div class="accordion">
                
                <div class="accordion-item" id="question1">
                    <a class="accordion-link" href="#question1">
                        Que tipo de conexão eu preciso para usar Spotify?
                        <i class="icon ion-md-arrow-dropdown"></i>
                        <i class="icon ion-md-arrow-dropup"></i>
                    </a>

                    
                    <div class="answer">
                        <p>
                        Spotify pode usar qualquer conexão! Conexão mobile, ADSL, via modem cabeado... 
                        O recomendado é uma conexao de no mínimo 1MB ou maior, no entanto você pode usar o Spotify com 384 kbps 
                        de velocidade aproximadamente(com conexões moveis lentas, basta ativar o modo de baixa qualidade). 
                        </p>    
                    </div>
                </div>
               
                <div class="accordion-item" id="question2">
                    <a class="accordion-link" href="#question2">
                        O Spotify consegue reproduzir em uma conexão EDGE(2G, internet móvel)?
                        <i class="icon ion-md-arrow-dropdown"></i>
                        <i class="icon ion-md-arrow-dropup"></i>
                    </a>
                    <div class="answer">
                        <p>
                        Se você tiver uma conexão mínima de 160 kbps, sim. Mas fique ciente, a conexão deve ser 
                        de aproximadamente 200 kbps constantemente, menor que isso é impossivel o pré carregamento.
                        </p>        
                    </div>
                </div>
                

                <div class="accordion-item" id="question3">
                    <a class="accordion-link" href="#question3">
                        Eu tenho internet limitada. Quanto de banda, especificamente, eu preciso para usar o Spotify?
                        <i class="icon ion-md-arrow-dropdown"></i>
                        <i class="icon ion-md-arrow-dropup"></i>
                    </a>
                    <div class="answer">
                        <p>
                        O Spotify nao usa mais conexão P2P, porém as músicas ainda sao as maiores consumidoras de dados. 
                        Para evitar o uso de dados, realize o download das faixas Offline(Premium) e pelo arquivo ou pelas configuraçoes habilite o modo Offline. 
                        Assim você pode reproduzir no dispositivo móvel ou em seu computador com uma qualidade um pouco menor de som. 
                        
                            Qualidade 96 kbps = 0.72 MB por minuto(Em dispositivos moveis)
                        Qualidade 160 kbps = 1.2 MB por minuto(Free, Ilimitado, Premium)
                            Qualidade 320 kbps = 2.4 MB por minuto(Premium, Desktop, Algumas plataformas de dispositivos moveis e alguns outros serviços Spotify)
                        </p>
                    </div>
                </div>            
                
                <div class="accordion-item" id="question4">
                    <a class="accordion-link" href="#question4">
                        Quanto de espaço eu preciso no meu armazenamento para minha playlist Offline?
                        <i class="icon ion-md-arrow-dropdown"></i>
                        <i class="icon ion-md-arrow-dropup"></i>
                    </a>
                    <div class="answer">
                        <p>
                        Se você gosta de versoes radio edits, serao aproximadamente 8.5 GB para 1000 musicas. Basicamente 32GB serao necessarios se você for escutar 3333 musicas em 1 dia.
                        Um cartao de memoria maior tem um maior custo-beneficio se você levar em consideraçao o preço/espaço de armazenamento.
                        Confira as especificaçoes do seu aparelho e veja qual tamanho maximo suportado de cartao de memoria.
                        </p>        
                    </div>            
                </div>
            </div>
        </div>
    </section>


</mid2>

export default Mid2;