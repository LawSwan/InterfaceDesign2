// Simple flat-vector dino illustrations, drawn to be easy for a toddler
// to tell apart by silhouette and color rather than fine detail.

function TRex({ className }) {
  return (
    <svg className={className} viewBox="0 0 200 200" role="img" aria-hidden="true">
      <ellipse cx="95" cy="150" rx="55" ry="14" fill="#0000001a" />
      {/* tail */}
      <path d="M55 120 Q10 105 8 85 Q30 95 60 105 Z" fill="#3fae6b" />
      {/* legs */}
      <path d="M70 140 L62 178 L82 178 L88 140 Z" fill="#2f8f55" />
      <path d="M110 140 L112 178 L132 178 L122 140 Z" fill="#2f8f55" />
      {/* body */}
      <ellipse cx="100" cy="120" rx="48" ry="38" fill="#4cbf7d" />
      {/* belly */}
      <ellipse cx="100" cy="132" rx="30" ry="20" fill="#dff7e6" />
      {/* arm */}
      <path d="M120 108 L138 116 L134 124 L118 118 Z" fill="#3fae6b" />
      {/* head */}
      <ellipse cx="150" cy="88" rx="34" ry="28" fill="#4cbf7d" />
      {/* snout */}
      <path d="M172 78 Q192 82 188 98 Q170 100 162 92 Z" fill="#4cbf7d" />
      {/* teeth */}
      <path d="M172 92 L176 100 L180 92 Z" fill="white" />
      <path d="M182 90 L186 98 L190 90 Z" fill="white" />
      {/* eye */}
      <circle cx="158" cy="78" r="7" fill="white" />
      <circle cx="160" cy="78" r="3.5" fill="#1a1a1a" />
    </svg>
  )
}

function Triceratops({ className }) {
  return (
    <svg className={className} viewBox="0 0 200 200" role="img" aria-hidden="true">
      <ellipse cx="100" cy="152" rx="58" ry="14" fill="#0000001a" />
      {/* legs */}
      <rect x="60" y="128" width="18" height="42" rx="6" fill="#2b7fa0" />
      <rect x="90" y="132" width="18" height="42" rx="6" fill="#2b7fa0" />
      <rect x="122" y="128" width="18" height="42" rx="6" fill="#2b7fa0" />
      {/* body */}
      <ellipse cx="105" cy="120" rx="55" ry="34" fill="#39a3cf" />
      {/* belly spots */}
      <circle cx="90" cy="128" r="6" fill="#c9edfb" />
      <circle cx="112" cy="132" r="5" fill="#c9edfb" />
      <circle cx="128" cy="122" r="4.5" fill="#c9edfb" />
      {/* tail */}
      <path d="M155 118 Q175 112 178 100 Q168 116 152 128 Z" fill="#2b7fa0" />
      {/* frill */}
      <path
        d="M40 100 Q30 60 55 45 Q52 75 62 95 Q48 92 40 100 Z"
        fill="#2b7fa0"
      />
      {/* head */}
      <ellipse cx="58" cy="95" rx="30" ry="24" fill="#39a3cf" />
      {/* beak */}
      <path d="M30 98 Q14 100 16 112 Q30 112 36 104 Z" fill="#2b7fa0" />
      {/* horns */}
      <path d="M50 72 L46 44 L58 70 Z" fill="#eef8ff" />
      <path d="M66 72 L70 44 L58 70 Z" fill="#eef8ff" />
      <path d="M28 92 L12 86 L28 100 Z" fill="#eef8ff" />
      {/* eye */}
      <circle cx="62" cy="86" r="6" fill="white" />
      <circle cx="63" cy="86" r="3" fill="#1a1a1a" />
    </svg>
  )
}

function Stegosaurus({ className }) {
  return (
    <svg className={className} viewBox="0 0 200 200" role="img" aria-hidden="true">
      <ellipse cx="100" cy="152" rx="58" ry="14" fill="#0000001a" />
      {/* legs */}
      <rect x="58" y="126" width="16" height="40" rx="6" fill="#a15fc9" />
      <rect x="90" y="130" width="16" height="40" rx="6" fill="#a15fc9" />
      <rect x="124" y="126" width="16" height="40" rx="6" fill="#a15fc9" />
      {/* tail */}
      <path d="M150 128 Q182 132 190 116 Q178 118 168 108" fill="none" stroke="#b571db" strokeWidth="14" strokeLinecap="round" />
      <path d="M186 108 L198 100 L190 118 Z" fill="#e9c6fb" />
      <path d="M184 120 L196 122 L186 132 Z" fill="#e9c6fb" />
      {/* body */}
      <ellipse cx="100" cy="122" rx="58" ry="30" fill="#b571db" />
      {/* belly */}
      <ellipse cx="100" cy="134" rx="34" ry="14" fill="#f3e0fd" />
      {/* plates */}
      <path d="M55 100 L48 74 L66 96 Z" fill="#e9c6fb" />
      <path d="M78 92 L74 62 L92 88 Z" fill="#e9c6fb" />
      <path d="M103 88 L102 58 L118 86 Z" fill="#e9c6fb" />
      <path d="M128 92 L130 64 L144 90 Z" fill="#e9c6fb" />
      {/* head */}
      <ellipse cx="42" cy="112" rx="20" ry="15" fill="#b571db" />
      {/* eye */}
      <circle cx="36" cy="108" r="5" fill="white" />
      <circle cx="35" cy="108" r="2.5" fill="#1a1a1a" />
    </svg>
  )
}

export const DINOS = [
  { id: 'trex', name: 'T-Rex', Art: TRex, color: '#4cbf7d' },
  { id: 'triceratops', name: 'Triceratops', Art: Triceratops, color: '#39a3cf' },
  { id: 'stegosaurus', name: 'Stegosaurus', Art: Stegosaurus, color: '#b571db' },
]
