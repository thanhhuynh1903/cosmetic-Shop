
import Tags from "../Tags/Tags";
import './sidebar.css';

export default function Sidebar({
  categorys,
  categoryCount,
  setCategoryFilter,
  tags,
  setTagFilter,
  onClose, // Thêm prop để đóng mobile drawer
  isMobile = false, // Prop để xác định có phải mobile không
}) {
  const allCategories = categorys.flatMap((cate) => cate.category);
  const uniqueCates = [...new Set(allCategories)].filter((cate) => cate !== "");

  const handleCategoryClick = (category) => {
    setCategoryFilter(category);
    if (isMobile && onClose) {
      onClose(); // Đóng drawer trên mobile sau khi chọn category
    }
  };

  const handleTagClick = (tag) => {
    setTagFilter(tag);
    if (isMobile && onClose) {
      onClose(); // Đóng drawer trên mobile sau khi chọn tag
    }
  };

  return (
    <div className="h-full">
      {/* Sidebar content */}
      <div className="h-full overflow-y-auto sidebar-scroll">
        <h3 className="text-lg font-semibold text-[#C28B7A] mb-4">Filters</h3>
        <div className="space-y-6">
          {/* Categories Section */}
          <div>
            <h4 className="text-sm font-medium text-gray-600 mb-2">Categories</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleCategoryClick("")}
                  className="flex items-center w-full p-2 text-[#7D6E67] rounded-lg hover:bg-[#F8F0ED] hover:text-[#C28B7A] transition-colors duration-200 text-left"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">All Products</span>
                  <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-medium text-[#C28B7A] bg-[#F8F0ED] rounded-full">
                    {categorys.length}
                  </span>
                </button>
              </li>
              {uniqueCates.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleCategoryClick(item)}
                    className="flex items-center w-full p-2 text-[#7D6E67] rounded-lg hover:bg-[#F8F0ED] hover:text-[#C28B7A] transition-colors duration-200 text-left"
                  >
                    <span className="flex-1 ms-3 whitespace-nowrap">{item}</span>
                    <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-medium text-[#C28B7A] bg-[#F8F0ED] rounded-full">
                      {categoryCount[item] || 0}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* Tags Section */}
          <div>
            <Tags tags={tags} setTagFilter={handleTagClick} />
          </div>
        </div>
      </div>
    </div>
  );
}