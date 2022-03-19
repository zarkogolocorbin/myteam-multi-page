import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
html {
    font-size: 62.5%;
    box-sizing: border-box;
}
*, *::after, *::before{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 }
 body{
     font-family: 'Livvic', sans-serif;
     background-color: rgba(121, 200, 199, 0.1);
    }

 .container {
     max-width: 1440px;
     margin: 0 auto;
     /* padding-left: calc(10vw -13.5px); 
     padding-right: calc(10vw -13.5px); */
 }

 .btn {
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 28px;
    font-family: 'Livvic', sans-serif;
    background: transparent;
    outline: none;
    cursor: pointer;
    padding: 1rem 3.2rem ;
    border-radius: 2.4rem;
    transition: all .2s ease-in;
    a{
        transition: all .2s ease-in;
        text-decoration: none;
    }
 }

 .btn-white {
     border: 2px solid #fff;
     a{
         color:#ffff;
     }
    
     &:hover {
         background-color: #fff;
         a{
             color: #002529;
             
         }
     }

 }
 .btn-green {
     border: 2px solid #002529;
     a{
         color:#002529;
     }
    
     &:hover {
         background-color: #002529;
         a{
             color: #fff;
             
         }
     }

 }

 .btn-submit {
     border: 2px solid #002529;
     a{
         color:#002529;
     }
    
     &:hover {
         background-color: #002529;
         
             color: #fff;
             
         
     }

 }

 .btn-coral {
     border: 2px solid #f67e7e;
     a{
         color:#f67e7e;
     }

     &:hover {
         background-color: #f67e7e;
         a{
             color: #fff;
             
         }
     }
}
`;
