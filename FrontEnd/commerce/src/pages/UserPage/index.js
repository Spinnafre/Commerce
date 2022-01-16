import styles from './styles.module.css'
import { useState, useEffect } from 'react'



//PS - URL, Categories, Name, Price

export default function UserPage() {

  const [userData, setUserData] = useState([])
  let UserKeys = []
  let UserValues = []

  const UserData = {
    "id": "b3395b98-b2b4-4014-89fd-430019353dec",
    "name": "Davi Silva da Penha",
    "login": "Spin",
    "address": "Rua 8, nº 40",
    "email": "mrspinnafre@gmai.com",
    "password": "$2b$08$Uq7ZLpQYFe0Vo5Lxi8t9MeR.PltFW0.9wg7L2OT1X7Z7qJKQXP5EK",
    "isAdmin": true,
    "created_at": "2021-08-30T20:41:20.248Z"
  }

  console.log(Object.keys(UserData))
  console.log(Object.values(UserData))

  const getUserData = async () => {
    const UserId = sessionStorage.getItem('id')
    const UserToken = sessionStorage.getItem('token')

		const result = await fetch(`http://localhost:3333/user/${UserId}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
        "Authorization": `Bearer ${UserToken}`
			}
		}).then((res) => res.json())

		if (result) {
			//sucesso
      console.log(result)
			setUserData(result)
		} else {
			alert("Ocorreu um erro ao tentar pegar os dados!")
		}
	}

  useEffect(() => {
    getUserData();
  }, [])
	
  useEffect(() => {
    if(userData){
      UserKeys = Object.keys(userData)
      UserValues = Object.values(userData)
    }
  }, [userData])

	return (
		<div className={styles.UserPage}>
      <h4>Dados do usuário</h4>
      <div className={styles.TableContainer}>
        <table>
          <tbody className={styles.TableBody}>
            {
              UserData ? 
              <>
              <tr>
                <td className={styles.LeftColumn}>{UserKeys[1]}:</td>
                <td>{UserValues[1]}</td>
              </tr>
              <tr>
                <td className={styles.LeftColumn}>{UserKeys[2]}:</td>
                <td>{UserValues[2]}</td>
              </tr>
              <tr>
                <td className={styles.LeftColumn}>{UserKeys[3]}:</td>
                <td>{UserValues[3]}</td>
              </tr>
              <tr>
                <td className={styles.LeftColumn}>{UserKeys[4]}:</td>
                <td>{UserValues[4]}</td>
              </tr>
              <tr>
                <td className={styles.LeftColumn}>{UserKeys[5]}:</td>
                <td>{UserValues[5]}</td>
              </tr>
              </>
               : "Carregando Informações do Usuário"
            }
          </tbody>
        </table>


      </div>
		</div>
	)
}
