import '../jestUtils'
import TextEditor from '../src/components/TextEditor'

describe('TextEdior Component', () => {
  let component
  let Button
	let Text
	let onPress

  beforeEach(() => {
		onPress = jest.fn()
    component = shallow(<TextEditor test="initial" pressHandler={onPress} />);
    Button = component.find('Button')
		Input = component.find('TextInput')
  });

  it('has a button with a title', () => {
    expect(Button.props().title).toEqual('Paste')
  });
	
	it('has no text in the input when it loads', () => {
		expect(!!Input.props().value).toEqual(false)
	})
	
	describe('TextEditor interactions', () => {
		it('changes the text when the button is pressed', () => {
			Button.simulate('press')
			expect(onPress).toHaveBeenCalled()
		})
	})
})

