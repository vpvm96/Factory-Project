module.exports = {
  importOrder: [
    "^@/utils/(.*)$",
    "^@/apis/(.*)$",
    "^@/data/(.*)$",
    "^@/service/(.*)$",
    "^@/hooks/(.*)$",
    "^@/recoils/(.*)$",
    "^@/pages/(.*)$",
    "^@/base/(.*)$",
    "^@/common/(.*)$",
    "^@/components/(.*)$",
    "^@/styles/(.*)$",
    "^@/public/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true, // 각 범주마다 공백을 주는 옵션
  importOrderSortSpecifiers: true, // 설정한 범주 내에서 정렬을 해주는 옵션 a -> z
  plugins: [require("prettier-plugin-tailwindcss")],
  tailwindConfig: "./tailwind.config.js",
};
