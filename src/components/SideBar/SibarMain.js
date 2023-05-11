
import { PieChartOutlined, UsergroupAddOutlined, FileTextOutlined } from '@ant-design/icons'
import { Menu } from "antd";
import { useNavigate } from 'react-router-dom';

const SibarMain =() => {
    const navigate = useNavigate()
    return(
        <>
        
        <div >
        <Menu
          onClick={({ key }) => {
            if (key) {
              navigate(key)
            }
          }}
          items={[
            { label: "Home", key: '/', icon: <PieChartOutlined /> },
            { label: "Users", key: '/Users', icon: <PieChartOutlined /> },
            { label: "Room", key: '/RoomsMain', icon: <UsergroupAddOutlined /> },
            { label: "RequestMain", key: '/RequestMain', icon: <FileTextOutlined /> },
          ]}
        >
        </Menu>
      </div>
        </>
    )
}

export default SibarMain