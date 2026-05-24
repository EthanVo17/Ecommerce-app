

function Product() {
    return (
        <section className="px-8 py-12 bg-gray-950">
            <h2 className="text-2xl font-bold mb-6 border-l-4 border-blue-500 pl-3">Sản phẩm mới nhất</h2>
            <div className="grid grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-blue-500 transition group cursor-pointer">
                <div className="bg-gray-700 h-48 rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition transform duration-300">
                    📸 Ảnh Sản Phẩm
                </div>
                <p className="text-sm text-gray-400 mb-1">Apple</p>
                <h3 className="font-bold text-lg mb-2">iPhone 15 Pro Max 256GB</h3>
                <div className="flex justify-between items-center mt-4">
                    <span className="text-xl font-bold text-blue-400">25.000.000đ</span>
                    <button className="bg-gray-700 hover:bg-blue-600 p-2 rounded-lg transition">
                    🛒
                    </button>
                </div>
                </div>
            ))}
            </div>
        </section>
    )
}

export default Product;