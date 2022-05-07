import logo from './logo.svg'
import 'antd/dist/antd.css'
import {Card, Row, Col} from 'antd'
import './App.css'

function App() {
	return (
		<div className='App'>
			<Row>
				<Col span={12}>
					<Card
						title='Default size card'
						extra={<a href='#'>More</a>}
						style={{width: 300}}
					>
						<p>Card content</p>
						<p>Card content</p>
						<p>Card content</p>
					</Card>
				</Col>
				<Col span={12}>
					<Card
						title='Small size card'
						extra={<a href='#'>More</a>}
						style={{width: 300}}
					>
						<p>Card content</p>
						<p>Card content</p>
						<p>Card content</p>
					</Card>
				</Col>
			</Row>
		</div>
	)
}

export default App
