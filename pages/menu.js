// import { useState } from 'react'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { supabase } from '../utils/supabaseClient'
import { IngredienceList } from './IngredienceList'

export async function getStaticProps() {
      const { data: menuArray, error } = await supabase.from('menuArray').select('*')
      if (error) {
            throw new Error(error)
      }

      return {
            props: {
                  menuArray
            }
      }
}

export default function Menu({ menuArray }) {
      const [check, setCheck] = useState(false)
      // console.log("menuページのmenuArray", menuArray);

      const handleSubmit = async (e) => {
            e.preventDefault();
            const name = e.currentTarget.menu.value;
            const ingre1 = e.currentTarget.ingre1.value;
            const ingre2 = e.currentTarget.ingre2.value;
            const ingre3 = e.currentTarget.ingre3.value;
            const ingre4 = e.currentTarget.ingre4.value;
            const ingre5 = e.currentTarget.ingre5.value;

            const ingreNum1 = e.currentTarget.ingreNum1.value;
            const ingreNum2 = e.currentTarget.ingreNum2.value;
            const ingreNum3 = e.currentTarget.ingreNum3.value;
            const ingreNum4 = e.currentTarget.ingreNum4.value;
            const ingreNum5 = e.currentTarget.ingreNum5.value;

            const ingreJson = {
                  "ingredience": {
                        [ingre1]: Number(ingreNum1),
                        [ingre2]: Number(ingreNum2),
                        [ingre3]: Number(ingreNum3),
                        [ingre4]: Number(ingreNum4),
                        [ingre5]: Number(ingreNum5)
                  }
            }
            console.log(ingreJson);

            await supabase
                  .from('menuArray')
                  .insert([
                        {
                              name: name, checked: false, ingredienceJson: ingreJson
                        },
                  ])
            return;
      }

      // クリックしたらchecked反転
      // const handleClick = (e) => {
      // }
      return (
            <div className="container" style={{ padding: '50px 0 100px 0' }}>
                  <h2>メニュー一覧</h2>
                  <ul className={styles.list}>
                        {menuArray.map((menu) => {
                              return (
                                    <>
                                          <li key={menu.id} className={styles.item}>
                                                <div className={styles.itemHeader}>
                                                      <input type="checkbox" checked={check} onClick={handleClick} />
                                                      <h3 className={styles.itemTtl}>{menu.name}<span>No.{menu.id}</span></h3>
                                                </div>
                                                <div>材料</div>
                                                <IngredienceList ingredienceObj={menu.ingredienceJson.ingredience} />
                                          </li>
                                    </>
                              )
                        })}
                  </ul>
                  <div className={styles.inputArea}>
                        <p>🌟メニューを追加</p>
                        <form onSubmit={handleSubmit}>
                              <label>メニュー名（必須）：<input type="text" placeholder="メニュー名" name="menu" required /></label>
                              <label>材料1（必須）：
                                    <input type="text" placeholder="材料" name="ingre1" required />
                                    <input type="number" placeholder="数量" name="ingreNum1" required />
                              </label>
                              <label>材料2：
                                    <input type="text" placeholder="材料" name="ingre2" />
                                    <input type="number" placeholder="数量" name="ingreNum2" />
                              </label>
                              <label>材料3：
                                    <input type="text" placeholder="材料" name="ingre3" />
                                    <input type="number" placeholder="数量" name="ingreNum3" />
                              </label>
                              <label>材料4：
                                    <input type="text" placeholder="材料" name="ingre4" />
                                    <input type="number" placeholder="数量" name="ingreNum4" />
                              </label>
                              <label>材料5：
                                    <input type="text" placeholder="材料" name="ingre5" />
                                    <input type="number" placeholder="数量" name="ingreNum5" /></label>
                              <button>追加</button>
                        </form>
                  </div>
            </div >
      )
}

