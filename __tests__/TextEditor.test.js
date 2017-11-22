import '../jestUtils'
import TextEditor from '../src/components/TextEditor'

describe('ReactNativeTesting', () => {
  let component
  let Button
	let Text
	let onPress

  beforeEach(() => {
		onPress = jest.fn()
    component = shallow(<TextEditor test="initial" pressHandler={onPress} />);
    Button = component.find('Button')
		Text = component.find('Text')
  });

  it('has has button text', () => {
    expect(Button.props().title).toEqual('some shit')
  });
	
	it('has initial text', () => {
		expect(Text.props().children).toEqual('initial')
	})
	
	it('changes the text when the button is pressed', () => {
		Button.simulate('press')
		expect(onPress).toHaveBeenCalled()
		//expect(Text.props().children).equal('changed')
	})
})

