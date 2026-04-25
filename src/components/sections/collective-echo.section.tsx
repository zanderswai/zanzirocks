export default function CollectiveEchoSection() {
  return (
    <section className="mb-32 md:mb-48">
      <div className="text-center mb-24">
        <h2 className="text-5xl font-headline mb-6">The Collective Echo</h2>
        <p className="text-on-surface-variant max-w-xl mx-auto font-light">Explore moments captured by our guests across the landscapes of Tanzania.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-surface-container rounded-lg overflow-hidden shadow-lg flex flex-col">
          <img
            alt="Safari Guest"
            className="w-full h-64 object-cover"
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2668&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="p-6 flex-1">
            <p className="text-sm text-on-surface-variant italic mb-6 font-light">"A world beyond my wildest imagination. The Serengeti breathes life."</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary-container/20 overflow-hidden">
                <img alt="avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn-QvVpE6E_F_2N_z1p4R1v0G5X_H6D7W7-R_E_S_P_X_L_V_N_M_K_J_I_H_G_F_E_D_C_B_A_0_1_2_3_4_5_6_7_8_9_" />
              </div>
              <span className="font-label text-[10px] font-bold uppercase tracking-widest">@TheVagabond</span>
            </div>
          </div>
        </div>
        <div className="bg-surface-container rounded-lg overflow-hidden shadow-lg flex flex-col">
          <img
            alt="Stone Town"
            className="w-full h-64 object-cover"
            src="https://plus.unsplash.com/premium_photo-1697730083060-f024eecacd48?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="p-6 flex-1">
            <p className="text-sm text-on-surface-variant italic mb-6 font-light">"The spices of Stone Town stay with you long after you leave."</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary-container/20"></div>
              <span className="font-label text-[10px] font-bold uppercase tracking-widest">@ClaraTravels</span>
            </div>
          </div>
        </div>
        <div className="bg-surface-container rounded-lg overflow-hidden shadow-lg flex flex-col">
          <img
            alt="Luxury Dining"
            className="w-full h-64 object-cover"
            src="https://images.unsplash.com/photo-1517016006573-2eefaa2f5b63?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="p-6 flex-1">
            <div className="flex gap-1 text-primary mb-4">
              <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
              <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
              <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
              <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
              <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
            </div>
            <p className="text-sm text-on-surface-variant italic mb-6 font-light">"Flawless execution from start to finish. Truly luxury service at every meal."</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary-container/20"></div>
              <span className="font-label text-[10px] font-bold uppercase tracking-widest">@TheGourmet</span>
            </div>
          </div>
        </div>
        <div className="bg-surface-container rounded-lg overflow-hidden shadow-lg flex flex-col">
          <img
            alt="Kilimanjaro"
            className="w-full h-64 object-cover"
            src="https://plus.unsplash.com/premium_photo-1664304370557-233bccc0ac85?q=80&w=2679&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="p-6 flex-1">
            <p className="text-sm text-on-surface-variant italic mb-6 font-light">"Reaching Uhuru Peak was the challenge of a lifetime. Incredible guides!"</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary-container/20"></div>
              <span className="font-label text-[10px] font-bold uppercase tracking-widest">@PeakSeeker</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
