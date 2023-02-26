import randomImg1 from "../assets/randomImg1.jpg"
import randomImg2 from "../assets/randomImg2.jpg"
import randomImg3 from "../assets/randomImg3.jpg"
import randomImg4 from "../assets/randomImg4.jpg"
import randomImg5 from "../assets/randomImg5.jpg"
import randomImg6 from "../assets/randomImg6.jpg"
import randomImg7 from "../assets/randomImg7.jpg"
import randomImg8 from "../assets/randomImg8.jpg"
import randomImg9 from "../assets/randomImg9.jpg"

export const getId = (id) => {
    switch(id){
        case "01":
            return randomImg1;
        case "02":
            return randomImg2;
        case "03":
            return randomImg3;
        case "04":
            return randomImg4;
        case "05":
            return randomImg5;
        case "06":
            return randomImg6;
        case "07":
            return randomImg7;
        case "08":
            return randomImg8;
        case "09": 
            return randomImg9;
        default:
            return randomImg1;
    }
}