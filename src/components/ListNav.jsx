export const itemsNav = [
  { text: "Features", sectionId: "features" },
  { text: "Pricing", sectionId: "pricing" },
  { text: "Contact", sectionId: "contact" },
];

export function ListNav({ border }) {
  return itemsNav.map((item, index) => (
    <li
      className={`w-full text-center py-4 md:py-0 md:text-start md:w-1/4 hover:text-SoftRed transition-colors border-b-2 border-GrayishBlue
      md:border-transparent border-${border}`}
      key={index}
    >
      <a href={`#${item.sectionId}`}>{item.text}</a>
    </li>
  ));
}
