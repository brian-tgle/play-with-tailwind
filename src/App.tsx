import Content from './components/Content';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Widget from './components/Widget';
import './index.css';

function App() {
  return (
    <div className="bg-gray-50">
      {/* Header */}
      <Header />
      {/* Main */}
      <main className="h-screen z-0 flex">
        <Sidebar />
        <Content>
          <>
            <ul className="grid grid-cols-6 gap-4 p-4">
            {Array.from(Array(6).keys()).map((item) => (
              <li>
                <a href="/" className="bg-blue-400 shadow-lg group block rounded-lg p-8 border border-gray-200">
                  <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
                    <div>
                      <dt className="sr-only">Title</dt>
                      <dd className="text-white leading-6 font-medium">
                        New story
                      </dd>
                    </div>
                    <div>
                      <dt className="sr-only">Category</dt>
                      <dd className="text-white text-sm font-medium sm:mb-4 lg:mb-0 xl:mb-4">
                        Maria
                      </dd>
                    </div>
                    <div className="col-start-2 row-start-1 row-end-3">
                      <dt className="sr-only">Users</dt>
                      <dd className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-2">
                        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80" alt="user.name" width="48" height="48" className="w-7 h-7 rounded-full bg-gray-100 border-2 border-white" />
                      </dd>
                    </div>
                  </dl>
                </a>
              </li>
              ))}
            </ul>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://images.unsplash.com/photo-1515711660811-48832a4c6f69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80" alt="Man looking at item at a store" />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                  <a href="/" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
                  <p className="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                </div>
              </div>
            </div>
          </>
        </Content>
        <Widget />
      </main>
      
      {/* Footer */}
    </div>
  );
}

export default App;
