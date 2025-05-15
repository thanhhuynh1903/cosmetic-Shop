import ContentLoader from "react-content-loader"

const ProductDetailSkeleton = ({ theme = "light" }) => {
  // Theme colors
  const backgroundColor = theme === "dark" ? "#2a2a2a" : "#f0f0f0"
  const foregroundColor = theme === "dark" ? "#3a3a3a" : "#e0e0e0"

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image Skeleton */}
        <div className="flex justify-center">
          <ContentLoader
            speed={2}
            width={400}
            height={400}
            viewBox="0 0 400 400"
            backgroundColor={backgroundColor}
            foregroundColor={foregroundColor}
          >
            <rect x="0" y="0" rx="8" ry="8" width="400" height="400" />
          </ContentLoader>
        </div>

        {/* Product Details Skeleton */}
        <div>
          {/* Breadcrumb */}
          <ContentLoader
            speed={2}
            width={400}
            height={20}
            viewBox="0 0 400 20"
            backgroundColor={backgroundColor}
            foregroundColor={foregroundColor}
            className="mb-6"
          >
            <rect x="0" y="8" rx="3" ry="3" width="60" height="8" />
            <rect x="70" y="8" rx="3" ry="3" width="80" height="8" />
            <rect x="160" y="8" rx="3" ry="3" width="100" height="8" />
            <rect x="270" y="8" rx="3" ry="3" width="120" height="8" />
          </ContentLoader>

          {/* Title */}
          <ContentLoader
            speed={2}
            width={300}
            height={40}
            viewBox="0 0 300 40"
            backgroundColor={backgroundColor}
            foregroundColor={foregroundColor}
            className="mb-4"
          >
            <rect x="0" y="0" rx="4" ry="4" width="300" height="30" />
          </ContentLoader>

          {/* Type and Brand */}
          <ContentLoader
            speed={2}
            width={250}
            height={50}
            viewBox="0 0 250 50"
            backgroundColor={backgroundColor}
            foregroundColor={foregroundColor}
            className="mb-4"
          >
            <rect x="0" y="0" rx="3" ry="3" width="150" height="15" />
            <rect x="0" y="25" rx="3" ry="3" width="120" height="15" />
          </ContentLoader>

          {/* Price and Stock */}
          <ContentLoader
            speed={2}
            width={200}
            height={60}
            viewBox="0 0 200 60"
            backgroundColor={backgroundColor}
            foregroundColor={foregroundColor}
            className="mb-4"
          >
            <rect x="0" y="0" rx="4" ry="4" width="100" height="25" />
            <rect x="0" y="35" rx="3" ry="3" width="80" height="15" />
          </ContentLoader>

          {/* Color Options */}
          <ContentLoader
            speed={2}
            width={400}
            height={50}
            viewBox="0 0 400 50"
            backgroundColor={backgroundColor}
            foregroundColor={foregroundColor}
            className="mb-6"
          >
            {Array(10)
              .fill()
              .map((_, i) => (
                <circle key={i} cx={20 + i * 40} cy="25" r="15" />
              ))}
          </ContentLoader>

          {/* Quantity and Buttons */}
          <ContentLoader
            speed={2}
            width={400}
            height={50}
            viewBox="0 0 400 50"
            backgroundColor={backgroundColor}
            foregroundColor={foregroundColor}
            className="mb-6"
          >
            <rect x="0" y="0" rx="5" ry="5" width="100" height="40" />
            <rect x="120" y="0" rx="5" ry="5" width="120" height="40" />
            <rect x="260" y="0" rx="5" ry="5" width="120" height="40" />
          </ContentLoader>

          {/* Tags */}
          <ContentLoader
            speed={2}
            width={400}
            height={80}
            viewBox="0 0 400 80"
            backgroundColor={backgroundColor}
            foregroundColor={foregroundColor}
            className="mb-6"
          >
            <rect x="0" y="0" rx="3" ry="3" width="60" height="15" />
            <rect x="0" y="25" rx="5" ry="5" width="80" height="30" />
            <rect x="90" y="25" rx="5" ry="5" width="100" height="30" />
            <rect x="200" y="25" rx="5" ry="5" width="90" height="30" />
            <rect x="300" y="25" rx="5" ry="5" width="80" height="30" />
          </ContentLoader>

          {/* Tabs */}
          <ContentLoader
            speed={2}
            width={250}
            height={40}
            viewBox="0 0 250 40"
            backgroundColor={backgroundColor}
            foregroundColor={foregroundColor}
            className="mb-4"
          >
            <rect x="0" y="0" rx="3" ry="3" width="100" height="30" />
            <rect x="120" y="0" rx="3" ry="3" width="100" height="30" />
          </ContentLoader>

          {/* Description */}
          <ContentLoader
            speed={2}
            width={400}
            height={120}
            viewBox="0 0 400 120"
            backgroundColor={backgroundColor}
            foregroundColor={foregroundColor}
          >
            <rect x="0" y="0" rx="3" ry="3" width="150" height="20" />
            <rect x="0" y="30" rx="3" ry="3" width="400" height="10" />
            <rect x="0" y="50" rx="3" ry="3" width="380" height="10" />
            <rect x="0" y="70" rx="3" ry="3" width="400" height="10" />
            <rect x="0" y="90" rx="3" ry="3" width="360" height="10" />
            <rect x="0" y="110" rx="3" ry="3" width="390" height="10" />
          </ContentLoader>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailSkeleton
