import '../jestUtils'
import TextEditor from '../src/components/TextEditor'

describe('TextEditor Component', () => {
  let component
  let Button
	let Text
	let Input
	let onPress
	let onTextEntry

  beforeEach(() => {
		onPress = jest.fn()
		onTextEntry = jest.fn()
    component = shallow(
			<TextEditor 
				textChange={onTextEntry}
				pasteWithButton={onPress}
			/>
		)
    Button = component.find('Button')
		Input = component.find('TextField')
  })

//  it('has a button with a title', () => {
//    expect(Button.props().title).toEqual('Paste')
//  });
	
	describe('TextEditor interactions', () => {
		it('the paste button responds to press', () => {
			Button.simulate('press')
			expect(onPress).toHaveBeenCalled()
		})
	})
})

