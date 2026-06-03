
function Category() {
    return (
        <section className="px-8 py-12">
            <h2 className="text-2xl font-bold mb-6 border-l-4 border-blue-500 pl-3">Danh mục nổi bật</h2>
            <div className="grid grid-cols-4 gap-6">
            {['Điện thoại', 'Laptop', 'Phụ kiện', 'Smartwatch'].map((category, index) => (
                <div key={index} className="bg-gray-800 h-32 rounded-xl flex items-center justify-center text-xl font-semibold hover:bg-gray-700 cursor-pointer transition border border-gray-700">
                {category}
                </div>
            ))}
            </div>
        </section>
    )
}

export default Category;