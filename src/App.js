import Anchor from './components/Anchor';
import Block from './components/Block';
import Header from './components/Header';
import Item from './components/Item';
import Layout from './components/Layout';
import Spacer from './components/Spacer';

function App() {
  return <Layout>
    <Header />
    <Spacer size={24} />
    <Block title={'Summary'}>
    A devoted web developer who wants learn more and improve others' lives. Skilled in problem solving and working independently.
    </Block>
    <Spacer size={24} />
    <Block title={'Projects'}>
      <Item title={<Anchor href={'https://codepen.io/mmusta/pen/VwGLGKr'}>Snake</Anchor>} description={'Javascript, HTML, CSS'}>
        I created a snake game for JavaScript using canvas.
        <ul>
          <li>I have learned about canvas element and how to draw using JavaScript 2D engine</li>
          <li>I experimented with dynamic styling with JS</li>
          <li>I learned about basic 2d computer graphics</li>
        </ul>
      </Item>
      <Item title={<Anchor href={'https://github.com/mmusta/tic-tac-toe'}>Tic Tac Toe </Anchor>} description={'Javascript, HTML, CSS'}>
        
        <ul>
          <li>I learned rendering multiple items with mapping</li>
          <li>I learned how to handle complex conditions delicately</li>
        </ul>
      </Item>
      <Item title={<Anchor href={'https://github.com/mmusta/rick-and-morty'}>Rick and Morty</Anchor>} description={'Javascript, HTML, CSS, React'}>
        <ul>
          <li>Learned how to fetch API data and processing it</li>
          <li>Applied a modern tech stack with an extendible architecture</li>
          <li>Used Antd library to easily create beautiful UI components</li>
          <li>Learned how to create a complex application with a bunch of components</li>
        </ul>
      </Item>
      <Item title={<Anchor href={'https://github.com/mmusta/todo-app'}>Todo App</Anchor>} description={'React, Form Handling'}>
        <ul>
          <li>Learned how to transform a list of data for UI</li>
          <li>Learned manipulating DOM elements in React way</li>
          <li>Implemented React Hook Form library for advanced form handling</li>
        </ul>
      </Item>
    </Block>
    <Block title={'Education'}>
      <Item title={'Marmara University'} description={'June 2023'}>
        <span className='italic'>B.S in Mechanical Engineering</span>
      </Item>
    </Block>
    <Spacer size={24} />
    <Block title={'Skills'}>
      Javascript, HTML, CSS, React, Git, Webpack
    </Block>
  </Layout>;
}

export default App;
