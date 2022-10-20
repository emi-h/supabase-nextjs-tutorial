import styles from '../styles/IngredienceList.module.css'
import { v4 as uuidv4 } from 'uuid';

export const IngredienceList = ({ ingredienceObj }) => {
      // オブジェクトから配列を作る
      const IngreentriesArray = Object.entries(ingredienceObj)

      // console.log("IngredienceListのingredienceObj", ingredienceObj);
      // const IngreKeyArray = Object.keys(ingredienceObj)
      // const IngreValueArray = Object.values(ingredienceObj)
      // console.log("IngreKeyArray", IngreKeyArray);
      // console.log("IngreValueArray", IngreValueArray);
      // console.log("IngreentriesArray", IngreentriesArray);

      const id = uuidv4();
      return (
            <ul>
                  {Object.entries(ingredienceObj).map((i) => {
                        return (
                              <>
                                    <li>{i}</li>
                              </>
                        )
                  })}
            </ul>
      )
}

const ingreObj1 = {
      犬1: "しば",
      inu2: "ぽめ"
}

// const IngreList = ({ ingreObj }) => {
//       console.log("ingreObj", ingreObj);
//       console.log("ingreObj1", ingreObj1);
//       console.log(" Object.keys(ingreObj)", Object.keys(ingreObj));

//       return (
//             // Object.keys(オブジェクト名).mapでループ
//             Object.keys(ingreObj).map((key) => {
//                   return (
//                         <>
//                               <li key={key}>
//                                     <span>{key}</span>
//                                     {ingreObj[key]}
//                               </li>
//                         </>
//                   );
//             })
//       )
// }