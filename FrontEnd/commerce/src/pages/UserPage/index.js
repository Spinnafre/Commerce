import styles from './styles.module.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import EditUser from '../../components/EditUser'

//PS - URL, Categories, Name, Price

export default function UserPage() {
  let navigate = useNavigate();

  const [userData, setUserData] = useState([])

  const getUserData = async () => {
    const UserId = sessionStorage.getItem('id')
    const UserToken = sessionStorage.getItem('token')

		const result = await fetch(`http://localhost:3333/user/${UserId}`, {
			method: 'GET',
			headers: {
        "Authorization": `Bearer ${UserToken}`
			}
		}).then((res) => res.json())

		if (result && UserToken) {
			//sucesso
			setUserData({
        name: result.name,
        login: result.login,
        address: result.address,
        email: result.email,
        isAdmin: result.isAdmin
      })

		} else {
			alert("Ocorreu um erro ao tentar pegar os dados!")
      navigate("/")
		}
	}

  // deletando usuário
	const DeleteUser = () => {
    const UserId = sessionStorage.getItem('id')
    const UserToken = sessionStorage.getItem('token')
		fetch(`http://localhost:3333/user/${UserId}`, {
			method: 'DELETE',
			headers: {
        "Authorization": `Bearer ${UserToken}`
			}
		})
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('isAdmin');
    navigate("/")
	}

  const ReloadUserData = (reload) => {
    if(reload){
      getUserData();
    }
  }

  useEffect(() => {
    getUserData();
  }, [])

	return (
		<div className={styles.UserPage}>
      <h4>Dados do usuário</h4>
      <div className={styles.TableContainer}>
        <table>
          <tbody className={styles.TableBody}>
            {
              userData ? 
              <>
              <tr>
                <td className={styles.LeftColumn}>Nome:</td>
                <td>{userData.name}</td>
              </tr>
              <tr>
                <td className={styles.LeftColumn}>Login:</td>
                <td>{userData.login}</td>
              </tr>
              <tr>
                <td className={styles.LeftColumn}>Endereço:</td>
                <td>{userData.address}</td>
              </tr>
              <tr>
                <td className={styles.LeftColumn}>Email:</td>
                <td>{userData.email}</td>
              </tr>
              </>
               : "Carregando Informações do Usuário"
            }
          </tbody>
        </table>

        <div className={styles.ManagementButtons}>
          <button className={styles.DeleteUserButton} onClick={() => DeleteUser()}>Excluir</button>
          <EditUser {...userData} ReloadUserData={ReloadUserData} />
        </div>
      </div>
		</div>
	)
}
