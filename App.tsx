import { Button, PlusIcon, LoaderIcon } from './components/Button';

export default function App() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="mb-8">MTS Button Component Demo</h1>

        {/* Size Variants */}
        <section className="mb-12">
          <h2 className="mb-4">Size Variants</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" size="xs">XS Button</Button>
            <Button variant="primary" size="s">S Button</Button>
            <Button variant="primary" size="m">M Button</Button>
            <Button variant="primary" size="l">L Button</Button>
          </div>
        </section>

        {/* Color Variants */}
        <section className="mb-12">
          <h2 className="mb-4">Color Variants</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="black">Black</Button>
            <Button variant="white">White</Button>
            <Button variant="gray">Gray</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="disabled">Disabled</Button>
            <Button variant="outline">Outline</Button>
          </div>
        </section>

        {/* Glass variant on dark background */}
        <section className="mb-12">
          <h2 className="mb-4">Glass Variant</h2>
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-8 rounded-lg">
            <Button variant="glass">Glass Button</Button>
          </div>
        </section>

        {/* Buttons with Icons - Left */}
        <section className="mb-12">
          <h2 className="mb-4">With Icons (Left)</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" size="xs" iconPosition="left" icon={<PlusIcon size={16} fill="white" />}>
              Add Item
            </Button>
            <Button variant="primary" size="s" iconPosition="left" icon={<PlusIcon size={16} fill="white" />}>
              Add Item
            </Button>
            <Button variant="primary" size="m" iconPosition="left" icon={<PlusIcon size={24} fill="white" />}>
              Add Item
            </Button>
            <Button variant="primary" size="l" iconPosition="left" icon={<PlusIcon size={24} fill="white" />}>
              Add Item
            </Button>
          </div>
        </section>

        {/* All variants in different sizes */}
        <section className="mb-12">
          <h2 className="mb-4">All Variants Grid</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* XS Size */}
            <div>
              <h3 className="mb-3">XS Size</h3>
              <div className="flex flex-col gap-2">
                <Button variant="primary" size="xs">Primary</Button>
                <Button variant="black" size="xs">Black</Button>
                <Button variant="white" size="xs">White</Button>
                <Button variant="gray" size="xs">Gray</Button>
                <Button variant="destructive" size="xs">Destructive</Button>
                <Button variant="outline" size="xs">Outline</Button>
              </div>
            </div>

            {/* S Size */}
            <div>
              <h3 className="mb-3">S Size</h3>
              <div className="flex flex-col gap-2">
                <Button variant="primary" size="s">Primary</Button>
                <Button variant="black" size="s">Black</Button>
                <Button variant="white" size="s">White</Button>
                <Button variant="gray" size="s">Gray</Button>
                <Button variant="destructive" size="s">Destructive</Button>
                <Button variant="outline" size="s">Outline</Button>
              </div>
            </div>

            {/* M Size */}
            <div>
              <h3 className="mb-3">M Size</h3>
              <div className="flex flex-col gap-2">
                <Button variant="primary" size="m">Primary</Button>
                <Button variant="black" size="m">Black</Button>
                <Button variant="white" size="m">White</Button>
                <Button variant="gray" size="m">Gray</Button>
                <Button variant="destructive" size="m">Destructive</Button>
                <Button variant="outline" size="m">Outline</Button>
              </div>
            </div>

            {/* L Size */}
            <div>
              <h3 className="mb-3">L Size</h3>
              <div className="flex flex-col gap-2">
                <Button variant="primary" size="l">Primary</Button>
                <Button variant="black" size="l">Black</Button>
                <Button variant="white" size="l">White</Button>
                <Button variant="gray" size="l">Gray</Button>
                <Button variant="destructive" size="l">Destructive</Button>
                <Button variant="outline" size="l">Outline</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Disabled State */}
        <section className="mb-12">
          <h2 className="mb-4">Disabled State</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" disabled>Disabled Primary</Button>
            <Button variant="black" disabled>Disabled Black</Button>
            <Button variant="white" disabled>Disabled White</Button>
          </div>
        </section>

        {/* Interactive Examples */}
        <section className="mb-12">
          <h2 className="mb-4">Interactive Examples</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button 
              variant="primary" 
              onClick={() => alert('Primary clicked!')}
            >
              Click Me
            </Button>
            <Button 
              variant="black" 
              size="l"
              iconPosition="left"
              icon={<PlusIcon size={24} fill="#fafafa" />}
              onClick={() => alert('Black with icon clicked!')}
            >
              Add New
            </Button>
            <Button 
              variant="destructive" 
              size="m"
              iconPosition="right"
              icon={<LoaderIcon size={24} fill="#d8400c" />}
              onClick={() => alert('Destructive clicked!')}
            >
              Delete
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}