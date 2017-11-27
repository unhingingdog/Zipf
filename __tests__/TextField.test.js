import '../jestUtils'
import TextField from '../src/components/TextField'

describe('TextField Component', () => {
  let component
  let Button
	let Text
	let Input
	let onPress
	let onTextEntry
	let fieldContent

  beforeEach(() => {
		onTextEntry = jest.fn()
    component = shallow(
			<TextField 
				textValue={"test test"} 
				textChange={onTextEntry}
			/>
		)
		Input = component.find('TextInput')
  })

	it('the responds to text entry', () => {
		Input.simulate('focus')
		Input.simulate('ChangeText', 'Changed')
		expect(onTextEntry).toHaveBeenCalledWith('Changed')
		console.log(component.fieldContent)
	})
	
	
})