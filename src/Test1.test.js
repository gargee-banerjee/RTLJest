import App from './App';
import { fireEvent, render, screen } from '@testing-library/react';
import test101 from './Helper';

// beforeAll(()=>{
//     console.log("Before All")
// });
// beforeEach(()=>{
//     console.log("Before Each")
// });

test('renders learn react link', () => {
    // console.log("TEst 1")
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
test('renders learn react link 2', () => {
    // console.log("Test 2")
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });   

  describe.skip("SnapShot testing suit",()=>{
    
      test('Snaphot testing',()=>{
        const appSnapShot = render(<App/>);
        expect(appSnapShot).toMatchSnapshot();
      })
  })

  describe('Event Testing',()=>{
    test('Button Event test',()=>{
        render(<App/>)
        const btn = screen.getByTestId("helloButtn");
        fireEvent.click(btn)
        expect(screen.getByText('HELLO')).toBeInTheDocument();
    })
  })

  describe('Function testing',()=>{
    test('Importing fn testing',()=>{
        expect(test101()).toMatch("Hi")
    })

    describe('RTL Query Testing',()=>{

        test("getByRole input",()=>{
            render(<App/>);
            const input = screen.getByRole('textbox',{name:"Name"});
            expect(input).toBeInTheDocument();
            expect(input).toHaveValue("Name");
            expect(input).toBeDisabled();
        })
        // test("Input Hiding",()=>{
            //     render(<App/>);
            //     const checkBox = screen.getByRole('checkbox',{name:"Are you an Employee"});
            //     const input = screen.getByRole('textbox',{name:"Id"});
            //     fireEvent.change(checkBox)
            //     expect(input).toBeInTheDocument();
            // })
            test("Custom Role Testing",()=>{
                render(<App/>);
                const div = screen.getByRole('roll')
                expect(div).toBeInTheDocument();
            })
            test("Multiple options",()=>{
                render(<App/>);
                const options = screen.getAllByRole('option');
                for(let i =0;i<options.length;i++){
                    expect(options[i]).toBeInTheDocument();

                }
            })
            
            
    })
  })