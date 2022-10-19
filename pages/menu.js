import { supabase } from '../utils/supabaseClient'

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
      console.log(menuArray);
      console.log("menuArray[0].ingredienceJson", menuArray[0].ingredienceJson);


      return (
            <div className="container" style={{ padding: '50px 0 100px 0' }}>
                  <div>
                        {menuArray.map((menu) => {
                              return (
                                    <>
                                          <p>name:{menu.name}</p>
                                          <p>id:{menu.id}</p>
                                    </>
                              )
                        })}
                  </div>
            </div>
      )
}